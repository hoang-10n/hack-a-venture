"use client"
import { ImageUploader } from "@/components/dashboard/upload/image-uploader";
import { Disease } from "@/constants/data";
import { useState } from "react";

const temp =
{
    plant: "Hydrangea macrophylla",
    symptom: "leaf spots are brown to gray",
    diseases: [
        {
            name: "Cercospora leaf spot",
            accuracyPercentage: 99
        },
        {
            name: "Botrytis blight",
            accuracyPercentage: 85
        },
        {
            name: "Powdery mildew",
            accuracyPercentage: 80
        },
        {
            name: "Downy mildew",
            accuracyPercentage: 78
        },
        {
            name: "Rust",
            accuracyPercentage: 75
        }
    ]
}
export default function UploadView() {
    const [genDiseases, setGenDiseases] = useState<Disease | null>(temp);

    return (
        <main className="flex-col justify-between gap-y-4 bg-gradient-to-br bg-white dark:bg-background p-4 h-5/6">
            <h1 className="text-center text-5xl font-semibold tracking-tight md:text-6xl m-4 mb-16">
                Upload your plant image here
            </h1>
            <div className="grid grid-cols-2 gap-4 h-5/6">
                <div className="container space-y-8 h-5/6">
                    <ImageUploader setGenDiseases={setGenDiseases} />
                </div>
                <div className="container space-y-8 h-5/6">
                    <h3 className="text-3xl lg:text-5xl font-bold m-2">Plant analysis</h3>
                    {genDiseases !== null ? <>
                        <h1 className="text-xl lg:text-3xl font-bold">
                            Species Name: {genDiseases?.plant}
                        </h1>
                        <h1 className="text-xl lg:text-3xl">
                            Symptom: {genDiseases?.symptom}
                        </h1>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-black dark:border-white">
                                    <th className="border border-black dark:border-white p-2">Disease Name</th>
                                    <th className="border border-black dark:border-white p-2">Accuracy Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {genDiseases?.diseases.map((a) => (
                                    <tr key={a.name} className="border-b border-black dark:border-white">
                                        <td className="border border-black dark:border-white p-2">{a.name}</td>
                                        <td className="border border-black dark:border-white p-2">{a.accuracyPercentage}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </> : <></>}
                </div>
            </div>
        </main >
    );
}
