import { snippets_3_0_0 } from "./snippets-3.0.0";

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
        version: '3.0.0',
        snippets: snippets_3_0_0
    }
]