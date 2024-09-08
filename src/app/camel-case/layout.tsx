import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Camel Case - Case Converter",
    description: "Convert between camelCase, kebab-case, PascalCase, and snake_case.",
};

export default function CamelCaseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}