import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const { title } = attributes;

  return <RichText.Content {...blockProps} tagName="h2" value={title} />;
}
