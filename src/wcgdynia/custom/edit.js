import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { link } from "@wordpress/icons";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { title, title2 } = attributes;

  return (
    <div {...blockProps}>
      <div class="wrapper">
        <RichText
          tagName="h2"
          value={title}
          allowedFormats={["core/bold", "core/italic"]}
          onChange={(title) => setAttributes({ title })}
          placeholder="Heading..."
        />
        <RichText
          tagName="h2"
          value={title2}
          allowedFormats={["core/bold", "core/italic"]}
          onChange={(title2) => setAttributes({ title2 })}
          placeholder="Heading2..."
        />
      </div>
    </div>
  );
}
