

export interface CV {
    name:          string;
    lastname:      string;
    email:         string;
    mobile:        string;
    github:        string;
    role:          string;
    suggestion:    string;
    description:   string;
    disponibility: number;
    salary:        number;
    experience:    Experience[];
    education:     Experience[];
    tag:           string[];
}

export interface Experience {
    input: string;
    desc:  string;
}
