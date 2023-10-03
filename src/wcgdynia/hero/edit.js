import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="hero-wrapper">
        <InnerBlocks
          template={[["wcgdynia/content-section"], ["wcgdynia/image-section"]]}
          templateLock="all"
        />
      </div>
    </div>
  );
}
