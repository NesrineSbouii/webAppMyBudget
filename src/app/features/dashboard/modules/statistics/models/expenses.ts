import { User } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { Category } from "../../categories/models/category";
import { Project } from "../../projects/models/project";

export interface Expenses {
    id?: string;
    amount: number;
    category: Observable<Category>;
    project: Observable<Project>;
    user: Observable<User>;
}