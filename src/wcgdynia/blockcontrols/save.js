import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { title, title2 } = attributes;

  return (
    <div {...blockProps}>
      <div class="wrapper">
        <RichText.Content tagName="h2" value={title} />
      </div>
    </div>
  );
}
