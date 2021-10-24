import Category from "../infra/typeorm/entities/Category";

export default interface ICategoryRepository {
    getAll(): Promise<Category[]>;
    getById(id: number): Promise<Category>;
}