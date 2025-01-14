export interface FuelProps {
  title: string;
  value: string;
}

export interface FooterLinkProps {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export interface DescriptionProps {
  status: string;
  name: string;
  description: string;
  endpoints: {
    url: string;
    description: string;
    method: string;
  }[];
  developer: {
    name: string;
    github: string;
    linkedin: string;
  };
}

export interface YearsOfProductionProps extends Omit<FuelProps, 'title'> {
  year: string;
}
