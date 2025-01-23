import { ImageUploader } from "@/components/dashboard/upload/image-uploader";
import { Disease } from "@/constants/data";
import { useState } from "react";

export default function UploadView() {
    const [genDiseases, setGenDiseases] = useState<Disease | null>(null);

    return (
        <main className="flex-col justify-between gap-y-4 bg-gradient-to-br bg-white dark:bg-background p-4 h-5/6">
            <h1 className="text-center text-5xl font-semibold tracking-tight md:text-6xl m-4">
                Upload your plant image here
            </h1>
            <div className="grid grid-cols-2 gap-4 h-5/6">
                <div className="container space-y-8 h-5/6">
                    <ImageUploader setGenDiseases={setGenDiseases} />
                </div>
                <div className="container space-y-8 h-5/6">
                    <h3 className="text-3xl lg:text-5xl font-bold">
                        {genDiseases?.plant}
                    </h3>
                    <h1 className="text-xl lg:text-3xl">
                        {genDiseases?.plant}
                    </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Disease Name</th>
                                <th>Accuracy Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {genDiseases?.disease.map((a) => (
                                <tr key={a.name}> {/* Assuming each disease has a unique 'id' property */}
                                    <td>{a.name}</td>
                                    <td>{a.accuracyPercentage}%</td> {/* Assuming each disease object has a 'name' and 'accuracy' property */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </main >
    );
}
