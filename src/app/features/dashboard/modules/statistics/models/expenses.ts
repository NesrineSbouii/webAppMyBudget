import { User } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { Category } from "../../categories/models/category";
import { Project } from "../../projects/models/project";

export interface Expense {
    id?: string;
    amount: number;
    category: string;
    project: string;
    user: string;
}