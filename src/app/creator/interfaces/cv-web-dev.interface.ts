

export interface CV {
    name:             string;
    email:            string;
    lastname:         string;
    github:           string;
    mobile:           string;
    description:      string;
    role:             string;
    salary:           number;
    suggestion:       string;
    disponibility:    number;
    tag:            string[];
    skills:         string[];
    experience: Experience[];
    education:  Experience[];
}

export interface Experience {
    input: string;
    desc:  string;
}
