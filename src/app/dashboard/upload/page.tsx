"use client";
import { ImageUploader } from "@/components/dashboard/upload/image-uploader";
import { Disease } from "@/constants/data";
import { useState } from "react";

const temp = {
  plant: "Hydrangea macrophylla",
  symptom: "leaf spots are brown to gray",
  diseases: [
    {
      name: "Cercospora leaf spot",
      accuracyPercentage: 99,
    },
    {
      name: "Botrytis blight",
      accuracyPercentage: 85,
    },
    {
      name: "Powdery mildew",
      accuracyPercentage: 80,
    },
    {
      name: "Downy mildew",
      accuracyPercentage: 78,
    },
    {
      name: "Rust",
      accuracyPercentage: 75,
    },
  ],
};
export default function UploadView() {
  const [genDiseases, setGenDiseases] = useState<Disease | null>(temp);

  return (
    <main className="flex flex-col justify-between gap-y-2 bg-gradient-to-br bg-white dark:bg-background p-2 h-full">
      <h1 className="text-center text-2xl md:text-4xl font-semibold tracking-tight m-2 mb-4 md:mb-8">
        Upload your plant image here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
        <div className="container space-y-4 h-full">
          <ImageUploader setGenDiseases={setGenDiseases} />
        </div>
        <div className="container space-y-4 h-full">
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold m-1">
            Plant analysis
          </h3>
          {genDiseases !== null ? (
            <>
              <h1 className="text-md md:text-lg lg:text-2xl font-bold">
                Species Name: {genDiseases?.plant}
              </h1>
              <h1 className="text-md md:text-lg lg:text-2xl">
                Symptom: {genDiseases?.symptom}
              </h1>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black dark:border-white">
                    <th className="border border-black dark:border-white p-1">
                      Disease Name
                    </th>
                    <th className="border border-black dark:border-white p-1">
                      Accuracy Percentage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {genDiseases?.diseases.map((a) => (
                    <tr
                      key={a.name}
                      className="border-b border-black dark:border-white"
                    >
                      <td className="border border-black dark:border-white p-1">
                        {a.name}
                      </td>
                      <td className="border border-black dark:border-white p-1">
                        {a.accuracyPercentage}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
}
