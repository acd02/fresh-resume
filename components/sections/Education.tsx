import { GraduationCap } from "lucide-preact";
import { Section } from "@/islands/Section.tsx";

export function Education() {
  return (
    <Section title="Education" icon={<GraduationCap />}>
      <ul>
        <li>
          <p>
            <strong>IFOCOP (2015)</strong>:
          </p>

          <ul>
            <li>
              <a href="https://www.francecompetences.fr/recherche/rncp/15364/">
                web development bachelor’s degree
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </Section>
  );
}
