import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { updateBlockAttributes } = useDispatch("core/block-editor");
  const block = useSelect((select) => {
    return select("core/block-editor").getBlock(blockProps["data-block"]);
  });
  const innerBlocks = block.innerBlocks;
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
          allowedBlocks={["core/button"]}
          templateLock={innerBlockCount >= 3 ? "insert" : undefined}
        />
      </div>
    </div>
  );
}
