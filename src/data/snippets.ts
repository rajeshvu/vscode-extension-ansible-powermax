import { snippets_3_1_0 } from "./snippets-3.1.0";
import { snippets_4_0_0 } from "./snippets-4.0.0";

export interface SnippetItem {
    label: string;
    description: string;
    body: string;
}

export interface Snippets {
    version: string;
    snippets: SnippetItem[];
}

export const all_snippets: Snippets[] = [
    {
        version: '4.0.0',
        snippets: snippets_4_0_0
    },
    {
        version: '3.1.0',
        snippets: snippets_3_1_0
    },
]