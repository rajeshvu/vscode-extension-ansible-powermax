import { options_4_0_1 } from "./options-4.0.1";

export interface OptionSubOptions {
    [subOption: string]: OptionDefinition;
}

export interface OptionDefinition {
    description: string[]; // Array of description lines
    required?: boolean;
    type: string;
    elements?: string;
    choices?: (string | number | boolean)[];
    default?: string | number | boolean;
    suboptions?: OptionSubOptions;
    [key: string]: any; // For any extra fields
}

export interface Options {
    [optionName: string]: OptionDefinition;
}

export interface ModuleOptions {
    [moduleName: string]: Options;
}

export const MODULE_OPTIONS: Record<string, ModuleOptions> = {
    '4.0.1': options_4_0_1,
};