import { Repository } from 'typeorm';
import { Photo } from './models/recipe.model';
import { PhotoArgs } from './dto/recipes.args';
export declare class PhotoService {
    private readonly photoRepository;
    constructor(photoRepository: Repository<Photo>);
    findAll(): Promise<Photo[]>;
    add(PhotoArgs: PhotoArgs): Promise<Photo>;
    findId(id: number): Promise<Photo>;
    remove(id: number): Promise<Photo>;
    update(id: number, PhotoArgs: PhotoArgs): Promise<Photo>;
    notFoundIdError(id: number): void;
}
