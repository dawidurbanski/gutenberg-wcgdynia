import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className="wrapper">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
