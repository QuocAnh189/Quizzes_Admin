"use client";
import { OurFileRouter } from "src/app/api/uploadthing/core";
import { UploadDropzone } from "@uploadthing/react";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UploadFileResponse } from "uploadthing/client";
import { IMG_MAX_LIMIT } from "./forms/user-form";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface ImageUploadProps {
  disabled?: boolean;
  onChange?: any;
  onRemove: (value: UploadFileResponse[]) => void;
  // value: UploadFileResponse[];
  value:any;
}

export default function FileUpload({
  disabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) {
  const router = useRouter();
  const { toast } = useToast();
  const onDeleteFile = (key: string) => {
    const files = value;
    let filteredFiles = files.filter((item:any) => item.key !== key);
    onRemove(filteredFiles);
  };
  const onUpdateFile = (newFiles: UploadFileResponse[]) => {
    onChange([...value, ...newFiles]);
  };
  return (
    <div>
      <div>
        {/* value?.length < IMG_MAX_LIMIT && */}
        {
          <UploadDropzone<OurFileRouter>
            className="dark:bg-zinc-800 py-2 ut-label:text-sm ut-allowed-content:ut-uploading:text-red-300"
            endpoint="imageUploader"
            config={{ mode: "auto" }}
            content={{
              allowedContent({ isUploading }: { isUploading: any }) {
                if (isUploading)
                  return (
                    <>
                      <p className="mt-2 text-sm text-slate-400 animate-pulse">
                        Img Uploading...
                      </p>
                    </>
                  );
              },
            }}
            onClientUploadComplete={(res: any) => {
              // Do something with the response
              console.log("Files: ", res);
              const data: UploadFileResponse[] | undefined = res;
              if (data) {
                onUpdateFile(data);
              }
            }}
            onUploadError={(error: Error) => {
              toast({
                title: "Error",
                variant: "destructive",
                description: error.message,
              });
            }}
            onUploadBegin={(name: any) => {
              // Do something once upload begins
              console.log("Uploading: ", name);
            }}
          />
        }
      </div>
    </div>
  );
}

// <div className="mb-4 flex items-center gap-4">
//         {!!value?.length &&
//           value?.map((item) => (
//             <div
//               key={item.key}
//               className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
//             >
//               <div className="z-10 absolute top-2 right-2">
//                 <Button
//                   type="button"
//                   onClick={() => onDeleteFile(item.key)}
//                   variant="destructive"
//                   size="sm"
//                 >
//                   <Trash className="h-4 w-4" />
//                 </Button>
//               </div>
//               <div>
//                 <Image
//                   fill
//                   className="object-cover"
//                   alt="Image"
//                   src={item.fileUrl || ""}
//                 />
//               </div>
//             </div>
//           ))}
//       </div>
