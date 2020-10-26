import {Injectable, UploadedFile} from '@nestjs/common';
import {Storage} from "@google-cloud/storage";
import {IFileService} from "./interfaces/file-service.interface";

@Injectable()
export class FileService implements IFileService {

    storage = new Storage({
        projectId: process.env.G_PROJECT_ID,
        keyFilename: process.env.GOOGLE_CRED
    });

    stream() {
        return 'foo';
    }

    public getBucket() {
        return this.storage.bucket(process.env.G_BUCKET_NAME);
    }

}
