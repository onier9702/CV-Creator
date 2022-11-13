

export interface FormWeb {
    form: Form[];
}

export interface Form {
    number:      any;
    form_name:   string;
    title:       string;
    placeholder: string;
    kind:        string;
    type:        string;
    options:     string[];
}

export interface Data {
    input: string;
    desc: string;
  }
