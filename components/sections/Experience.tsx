import { Rewind } from "lucide-preact";
import { Section } from "@/islands/Section.tsx";

export function Experience() {
  return (
    <Section title="Experience" icon={<Rewind />}>
      <ul>
        <li>
          <p>
            <a href="https://www.leboncoin.fr/">Le Bon Coin</a>:
          </p>
          <p>
            <em>from december 2019 to ?</em>
          </p>
          <ul>
            <li>Handle real estate related ads</li>
            <li>
              On the{" "}
              <a href="https://sparkui.vercel.app">Spark Design System</a> team
            </li>
          </ul>
        </li>
        <li>
          <p>
            <a href="https://go.rithum.com/ecommerce-growth.html">
              Blueboard (now acquired by Channel Advisor)
            </a>:
          </p>
          <p>
            <em>from april 2019 to november 2019</em>
          </p>
          <ul>
            <li>
              Build dashboard for product users, allowing them to view data
              related to their brand
            </li>
            <li>
              Build a chrome extension so that a user is able to view data
              related to the current page
            </li>
          </ul>
        </li>
        <li>
          <p>
            <a href="https://www.fabernovel.com/">
              Fabernovel Technologies
            </a>:
          </p>
          <p>
            <em>from october 2016 to mars 2019</em>
          </p>
          <ul>
            <li>
              Build dashboards / onboarding processes for bank companies and the
              like
            </li>
            <li>Build showcase websites</li>
          </ul>
        </li>
      </ul>
    </Section>
  );
}
