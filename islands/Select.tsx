import { useId } from "preact/hooks";
import * as select from "@zag-js/select";
import { normalizeProps, useMachine } from "@zag-js/preact";

const data = [
  { label: "Nigeria", value: "NG" },
  { label: "Japan", value: "JP" },
  { label: "Korea", value: "KO" },
  { label: "Kenya", value: "KE" },
  { label: "United Kingdom", value: "UK" },
  { label: "Ghana", value: "GH" },
  { label: "Uganda", value: "UG" },
];

export function Select() {
  const id = useId();
  const collection = select.collection({ items: data });

  const service = useMachine(select.machine, { id, collection });
  const api = select.connect(service, normalizeProps);

  return (
    <div class="my-2" {...api.getRootProps()}>
      <div {...api.getControlProps()}>
        <label class="inline-block mr-2 font-semibold" {...api.getLabelProps()}>
          Country
        </label>
        <button
          class="bg-green-400 p-2"
          type="button"
          {...api.getTriggerProps()}
        >
          {api.valueAsString || "Select option"}
        </button>
      </div>

      <div
        {...api.getPositionerProps()}
      >
        <ul
          class="border border-gray-400 bg-white px-2"
          {...api.getContentProps()}
        >
          {data.map((item) => (
            <li
              class="data-highlighted:bg-green-100"
              key={item.value}
              {...api.getItemProps({ item })}
            >
              <span {...api.getItemTextProps({ item })}>{item.label}</span>
              <span
                class="inline-block ml-2"
                {...api.getItemIndicatorProps({ item })}
              >
                ✓
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
