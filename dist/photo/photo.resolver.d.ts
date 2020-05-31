import { Photo } from './photo.entity';
import { PhotoArgs } from './dto/photo.args';
import { PhotoService } from './photo.service';
export declare class PhotoResolver {
    private readonly photoService;
    constructor(photoService: PhotoService);
    photoFindAll(): Promise<Photo[]>;
    photoFindId(id: number): Promise<Photo>;
    photoAdd(photoArgs: PhotoArgs): Promise<Photo>;
    photoUpdate(id: number, PhotoArgs: PhotoArgs): Promise<Photo>;
    photoDelete(id: number): Promise<Photo>;
}
