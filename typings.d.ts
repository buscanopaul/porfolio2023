type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends Base {
    publishedAt: any;
    author: Author;
    body: Block[];
    excerpt: Block[];
    categories: Category[];
    mainImage: Image;
    secondaryImage: Image;
    slug: Slug;
    title: string;
    company: string;
    description: string;
    isRelease: boolean;
    repo: string;
    webhook: string;
    android: string;
    ios: string;
}

interface Company extends Base {
    company: string
    jobTitle: string;
    companyLogo: Image;
    duration: string;
    publishedAt: any;
    jobDescription: Block[];
    companyUrl: string
}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface SecondaryImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}

interface Company {
    _type: "string";
    current: string;
}