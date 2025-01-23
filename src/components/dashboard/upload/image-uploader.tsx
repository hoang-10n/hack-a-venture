/* eslint-disable @next/next/no-img-element */
"use client";
import React, { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { z } from "zod";
import { ImagePlus } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Disease } from "@/constants/data";

const genAI = new GoogleGenerativeAI('AIzaSyB2TWRDePdi7KQ5qpqOLRwbHjY0qS0tN14');
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const prompt = `
when I input an agricultural crop, you will choose the most well-known symptom (5-8 words) of that crop with the most common disease.
Then give me the names of the 5 most closely-related diseases with this symptom with percentage accuracy with 2 decimal digits (as convincing as possible).
You should return answer in json like this and nothing else: 
{
    "plant": "cotton",
    "symptom": "leaves curl up like cocoons",
    "diseases": [
        {
            "name": "Cotton leaf curl virus",
            "accuracyPercentage": 98
        },
        {
            "name": "Fusarium wilt",
            "accuracyPercentage": 75
        },
        {
            "name": "Verticillium wilt",
            "accuracyPercentage": 72
        },
        {
            "name": "Bacterial blight",
            "accuracyPercentage": 68
        },
        {
            "name": "Alternaria leaf spot",
            "accuracyPercentage": 65
        }
    ]
}
Now do the same with: 
`

interface SetGenDiseasesProps {
  setGenDiseases: (t: Disease) => void
}

export const ImageUploader: React.FC<SetGenDiseasesProps> = ({ setGenDiseases }) => {
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>("");
  const [plantName, setPlantName] = useState<string>("");

  const formSchema = z.object({
    image: z
      //Rest of validations done via react dropzone
      .instanceof(File)
      .refine((file) => file.size !== 0, "Please upload an image"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      image: new File([""], "filename"),
    },
  });

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("image", acceptedFiles[0]);
        form.clearErrors("image");
      } catch (error) {
        setPreview(null);
        form.resetField("image");
      }
    },
    [form],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const targetUrl = 'http://localhost:3001/api/proxy';

      const formData = new FormData();
      formData.append('images', values.image);
      formData.append('similar_images', 'true');

      const response = await axios.post(targetUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'origin': 'x-requested-with'
        },
      });

      setPlantName(response.data.result.classification.suggestions[0].name);
      toast.success(`Image uploaded successfully 🎉 ${values.image.name}`);
    } catch (error) {
      console.error('Error posting:', error);
      toast.error('Failed to upload image.');
    }
  };

  useEffect(() => {
    const sendPlant = async () => {
      if (plantName !== "") {
        const result = await model.generateContent(prompt + plantName);
        const response = await result.response;
        console.log(response.text())
        setGenDiseases(JSON.parse(response.text()))
      }
    }
    sendPlant().catch(console.error)
  }, [plantName])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 h-full">
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem className="mx-auto aspect-square">
              <FormLabel
                className={`${fileRejections.length !== 0 && "text-destructive"
                  }`}
              >
              </FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground aspect-square"
                >
                  {preview && (
                    <img
                      src={preview as string}
                      alt="Uploaded image"
                      className="max-h-[400px] rounded-lg"
                    />
                  )}
                  <ImagePlus
                    className={`size-40 ${preview ? "hidden" : "block"}`}
                  />
                  <Input {...getInputProps()} type="file" />
                  {isDragActive ? (
                    <p>Drop the image!</p>
                  ) : (
                    <p>Click here or drag an image to upload it</p>
                  )}
                </div>
              </FormControl>
              <FormMessage>
                {fileRejections.length !== 0 && (
                  <p>
                    Image must be less than 1MB and of type png, jpg, or jpeg
                  </p>
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="mx-auto block h-auto rounded-lg px-8 py-3 text-xl"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
