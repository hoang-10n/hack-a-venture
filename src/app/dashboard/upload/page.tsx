import { ImageUploader } from "@/components/dashboard/upload/image-uploader";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between gap-y-4 bg-gradient-to-br bg-white dark:bg-background pb-4 pt-20 h-[calc(100dvh-200px)]">
            <div className="container space-y-8">
                <h1 className="text-center text-5xl font-semibold tracking-tight md:text-6xl">
                    Simple Image Uploader
                </h1>
                <p className="text-center text-xl">
                    Image uploader component built with{" "}
                    <a
                        href="https://ui.shadcn.com/"
                        target="_blank"
                        className="transition-all hover:underline"
                    >
                        shadcn/ui
                    </a>{" "}
                    <a
                        href="https://react-dropzone.js.org/"
                        target="_blank"
                        className="transition-all hover:underline"
                    >
                        react-dropzone
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://zod.dev/"
                        target="_blank"
                        className="transition-all hover:underline"
                    >
                        zod
                    </a>
                </p>
                <ImageUploader />
            </div>
        </main>
    );
}
