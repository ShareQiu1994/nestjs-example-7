import { Photo } from './models/recipe.model';
import { PhotoService } from './recipes.service';
import { PhotoArgs } from './dto/recipes.args';
export declare class PhotoResolver {
    private readonly photoService;
    constructor(photoService: PhotoService);
    photoFindAll(): Promise<Photo[]>;
    photoFindId(id: number): Promise<Photo>;
    photoAdd(PhotoArgs: PhotoArgs): Promise<Photo>;
    photoUpdate(id: number, PhotoArgs: PhotoArgs): Promise<Photo>;
    photoDelete(id: number): Promise<Photo>;
}
