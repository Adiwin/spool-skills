import { readFile } from "fs/promises";
import path from "path";

type SkillContextMode = "scene" | "animate";

const SKILL_FILE_GROUPS: Record<SkillContextMode, string[]> = {
  scene: [
    "SKILL.md",
    "easing/layer_easing.md",
    "easing/text_easing.md",
  ],
  animate: [
    "SKILL.md",
    "animations/opacity.md",
    "animations/move.md",
    "animations/scale.md",
    "animations/rotate.md",
    "animations/blur.md",
    "animations/textIn.md",
    "animations/slideIn.md",
    "animations/growIn.md",
    "animations/grow_in_group.md",
    "animations/shrinkOut.md",
    "animations/shrink_out_group.md",
    "animations/dropIn.md",
    "animations/spinIn.md",
    "animations/twist_in.md",
    "animations/resize.md",
    "animations/corner.md",
    "animations/tweet_appears.md",
    "easing/layer_easing.md",
    "easing/text_easing.md",
  ],
};

const skillCache = new Map<SkillContextMode, Promise<string>>();

function getSkillAbsolutePath(relativePath: string) {
  return path.join(process.cwd(), "src/AI/skills", relativePath);
}

async function buildSkillContext(mode: SkillContextMode) {
  const files = SKILL_FILE_GROUPS[mode];
  const contents = await Promise.all(
    files.map(async (file) => {
      const body = await readFile(getSkillAbsolutePath(file), "utf8");
      return `FILE: ${file}\n${body.trim()}`;
    }),
  );

  return contents.join("\n\n");
}

async function buildDemoSceneContext() {
  const demoFiles = [
    "search-bar-animation.json",
    "cascading-texts.json",
    "mask-demo.json",
    "photo-gallery.json",
    "chat-messages-demo.json",
    "glide-remix.json",
    "tweet.json",
  ];

  const excerpts = await Promise.all(
    demoFiles.map(async (file) => {
      const absolutePath = path.join(process.cwd(), "src/demo-scenes-json", file);
      const body = await readFile(absolutePath, "utf8");
      return `DEMO: ${file}\n${body.slice(0, 4500).trim()}`;
    }),
  );

  return excerpts.join("\n\n");
}

export async function getMotionSkillContext(mode: SkillContextMode) {
  if (!skillCache.has(mode)) {
    skillCache.set(mode, buildSkillContext(mode));
  }

  return skillCache.get(mode)!;
}

const demoCache = buildDemoSceneContext();

export async function getDemoSceneContext() {
  return demoCache;
}
