import Editor from "@/components/dom-components/RichTextEditor";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [editorState, setEditorState] = useState<string | null>(null);
  const [plainText, setPlainText] = useState("");
  const wordCount = editorState?.split(" ").length ?? 0;

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>📱 Native Side</Text>
        <Text style={{ fontSize: 16, marginVertical: 10 }}>{plainText}</Text>
        <Text style={{ fontSize: 16 }}>Words: {wordCount}</Text>
      </View>
      <Editor setEditorState={setEditorState} setPlainText={setPlainText} />
    </View>
  );
}
