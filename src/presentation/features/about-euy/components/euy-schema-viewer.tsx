import React, { useState } from 'react';
import { CodeBlock } from '../../../../core/components/code-block/code-block';
import { useTranslation } from '../../../../core/localization/use-translation';

const SAMPLE_EUY_JSON = `{
  "id": "deck-sun-001",
  "name": "Sundanese Everyday Slang",
  "language": "id-sun",
  "difficulty": "beginner",
  "rolePlay": "Friendly Bandung barista speaking casual Sundanese",
  "explanationRolePlay": "Explain the warm emotion behind Sundanese greetings",
  "listCards": [
    {
      "idCard": "c-01",
      "defaultLanguage": "Kumaha Damang?",
      "translation": "Bagaimana kabarmu? / How are you doing?",
      "phoneticLang": "ku-ma-ha da-mang",
      "additionalContext": "Greeting for friends and elders in West Java",
      "reps": 10,
      "correctAnswer": 10,
      "finalScore": 100
    }
  ]
}`;

const SCHEMA_DEFINITION = `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Deck",
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "language": { "type": "string" },
    "difficulty": { "enum": ["beginner", "intermediate", "expert"] },
    "rolePlay": { "type": "string" },
    "explanationRolePlay": { "type": "string" },
    "listCards": { "type": "array", "items": { "$ref": "#/$defs/Card" } }
  },
  "required": ["id", "name", "language", "difficulty", "listCards"]
}`;

export const EuySchemaViewer: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'sample' | 'schema'>('sample');

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveTab('sample')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'sample'
              ? 'bg-[#A9D6E5] text-[#2F3A3F] border-[1.5px] border-[#5B93AE] shadow-xs'
              : 'bg-[#FAFAF8] dark:bg-[#171F23] text-[#7D8A8F] dark:text-[#9EABB0] border border-[rgba(125,138,143,0.30)] hover:border-[#5B93AE]'
          }`}
        >
          {t.aboutEuy.tabCode}
        </button>
        <button
          onClick={() => setActiveTab('schema')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'schema'
              ? 'bg-[#A9D6E5] text-[#2F3A3F] border-[1.5px] border-[#5B93AE] shadow-xs'
              : 'bg-[#FAFAF8] dark:bg-[#171F23] text-[#7D8A8F] dark:text-[#9EABB0] border border-[rgba(125,138,143,0.30)] hover:border-[#5B93AE]'
          }`}
        >
          {t.aboutEuy.tabSchema}
        </button>
      </div>

      <CodeBlock
        code={activeTab === 'sample' ? SAMPLE_EUY_JSON : SCHEMA_DEFINITION}
        copyLabel={t.aboutEuy.copyCode}
        copiedLabel={t.aboutEuy.copied}
      />
    </div>
  );
};
