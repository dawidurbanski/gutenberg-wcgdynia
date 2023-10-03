import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

import "./style.scss";
import "./editor.scss";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType("wcgdynia/content-section", {
  title: "Content Section",
  parent: ["wcgdynia/hero"],

  edit({ className }) {
    return (
      <div className={`${className} hero-content`}>
        <InnerBlocks
          template={[
            ["core/heading", { placeholder: "Section title" }],
            ["core/paragraph", { placeholder: "Section content" }],
          ]}
          templateLock="all"
        />
      </div>
    );
  },

  save() {
    return (
      <div className="hero-content">
        <InnerBlocks.Content />
      </div>
    );
  },
});

registerBlockType("wcgdynia/image-section", {
  title: "Image Section",
  parent: ["wcgdynia/hero"],

  edit({ className }) {
    return (
      <div className={`${className} hero-image`}>
        <InnerBlocks template={[["core/image"]]} templateLock="all" />
      </div>
    );
  },

  save() {
    return (
      <div className="hero-image">
        <InnerBlocks.Content />
      </div>
    );
  },
});

registerBlockType(metadata.name, {
  edit: Edit,
  save,
});
