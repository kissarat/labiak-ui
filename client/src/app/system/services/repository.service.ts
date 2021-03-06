import { HttpClient } from "@angular/common/http";
import { Success } from 'src/app/interfaces/success';
import { Observable } from 'rxjs';
import { Ok } from 'src/app/interfaces/ok';

export abstract class RepositoryService<Model> {
  get origin(): string {
    return 'http://localhost:3000/api/v1';
  }

  get name(): string {
    throw new Error('Name of model is not set in derived class');
  }

  get prefix(): string {
    return `${this.origin}/${this.name}`;
  }

  constructor(protected http: HttpClient) {
  }

  public fetch(params: {[name: string]: string} = {}): Observable<Success<Model>> {
    return this.http.get<Success<Model>>(`${this.prefix}s`, { params });
  }

  create(data: Model) {
    return this.http.post<Success<Model>>(this.prefix, data);
  }

  update(id: string, data: object) {
    return this.http.put<Success<Model>>(`${this.prefix}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.prefix}/${id}`);
  }
}
