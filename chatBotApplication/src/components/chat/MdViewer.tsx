import React, { useRef, useEffect } from "react";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "./markdown.css";

const MdViewer = ({ modelValue }: {modelValue: string}) => {
  const editorRef = useRef(null);

  useEffect(() => {
    /* eslint-disable no-new */
    const viewer = new Viewer({
      el: editorRef.current,
      initialValue: modelValue,
      extendedAutolinks: false,
      frontMatter: false,
      linkAttributes: {
        target: "_blank",
      },
      theme: "dark",
    });

    return () => {
      viewer.destroy();
    };
  }, [modelValue]);

  return <div ref={editorRef} />;
};

MdViewer.defaultParams = {
  modelValue: "" as any,
};

export default MdViewer;
