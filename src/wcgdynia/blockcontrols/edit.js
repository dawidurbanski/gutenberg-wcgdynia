import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { ToolbarButton } from "@wordpress/components";
import { wordpress } from "@wordpress/icons";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { title, textAlign } = attributes;

  return (
    <div {...blockProps}>
      <div className={`align-${textAlign}`}>
        <RichText
          tagName="h2"
          value={title}
          allowedFormats={["core/bold", "core/italic"]}
          onChange={(title) => setAttributes({ title })}
          placeholder="Heading..."
        />
        <BlockControls>
          <AlignmentToolbar
            value={textAlign}
            onChange={(align) => {
              setAttributes({ textAlign: align });
            }}
          />
          <ToolbarButton
            name="link"
            icon={wordpress}
            title="Link"
            onClick={() => {
              console.log("Link button clicked");
            }}
          />
        </BlockControls>
      </div>
    </div>
  );
}
