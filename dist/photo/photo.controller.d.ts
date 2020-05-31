import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { PhotoArgs } from './dto/photo.args';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    findAll(): Promise<Photo[]>;
    add(PhotoArgs: PhotoArgs): Promise<Photo>;
    findId(id: number): Promise<Photo>;
    remove(id: number): Promise<Photo>;
    update(id: number, PhotoArgs: PhotoArgs): Promise<Photo>;
}
