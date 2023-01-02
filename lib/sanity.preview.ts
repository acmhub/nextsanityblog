"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
	/**
	 * Supposed to throw error if user is not logged in but throws error regardless
	 * Not really necessary as you can't get inside the studio, let alone preview, if you're not logged in
	 */
	// throw new Error("Unable to load preview as you are not logged in.");
}

if (!projectId || !dataset) {
	throw new Error(
		"Missing projectId or dataset. Check your sanity.json or .env file."
	);
}

export const usePreview = definePreview({
	projectId,
	dataset,
	onPublicAccessOnly,
});
