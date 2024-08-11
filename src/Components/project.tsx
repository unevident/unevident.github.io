export class Project {
    title: string;
    description: string;
    tags: string;

    constructor(title: string, description: string, tags: string) {
        this.title = title;
        this.description = description;
        this.tags = tags;
    }
}