import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { updateBlockAttributes } = useDispatch("core/block-editor");
  const block = useSelect((select) => {
    return select("core/block-editor").getBlock(blockProps["data-block"]);
  });
  const innerBlocks = block.innerBlocks[0].innerBlocks;
  const innerBlockCount = innerBlocks.length;

  useEffect(() => {
    if (innerBlockCount >= 3) {
      updateBlockAttributes(
        innerBlocks.map((block) => block.clientId),
        {
          lock: { move: false, remove: false },
        }
      );
    }
  }, [innerBlockCount]);

  return (
    <div {...blockProps}>
      <div className="wrapper">
        <InnerBlocks
          template={[["core/buttons"]]}
          allowedBlocks={["core/buttons"]}
          templateLock={innerBlockCount >= 3 ? "all" : undefined}
        />
      </div>
    </div>
  );
}
