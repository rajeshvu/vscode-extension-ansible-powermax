import { snippets_4_1_0 } from "./snippets-4.1.0";

export interface SnippetItem {
    label: string;
    description: string;
    body: string;
}

export interface Snippets {
    version: string;
    snippets: SnippetItem[];
}

export const SNIPPETS: Snippets[] = [
    {
        version: '4.1.0',
        snippets: snippets_4_1_0
    }
]