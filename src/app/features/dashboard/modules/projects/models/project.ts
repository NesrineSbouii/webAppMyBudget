import { Observable } from "rxjs";
import { Group } from "../../models/group";
export interface Project {
    id?: string;
    name: string;
    budget: number;
    group?: Observable<Group>;
}