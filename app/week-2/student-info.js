import Link from "next/link";

export default function StudentInfo() {
  const name = "Carter McLeod";
  const githubRepoUrl = "https://github.com/CarterMcLeod1/cprg306-assignments";

  return (
    <section style={{ marginTop: "12px" }}>
      <p style={{ margin: 0 }}>
        <strong>Name:</strong> {name}
      </p>

      <p style={{ marginTop: "8px" }}>
        <strong>GitHub:</strong>{" "}
        <Link href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
          {githubRepoUrl}
        </Link>
      </p>
    </section>
  );
}
