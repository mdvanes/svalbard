import { Temporal } from "@js-temporal/polyfill";

// TODO move this to a new util library under /libs/utils
export const formatDate = (plainDateString: string) => {
  try {
    const date = Temporal.PlainDate.from(plainDateString);

    const formatted = date.toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return formatted;
  } catch {
    return plainDateString;
  }
};
