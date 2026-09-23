import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

describe("Project Assets and Configuration Tests", () => {
  const assetsDir = path.resolve(process.cwd(), "public", "assets", "img", "projects");
  const assetsIndexFile = path.resolve(process.cwd(), "public", "assets", "index.js");
  const projectsComponentFile = path.resolve(process.cwd(), "components", "Projects.jsx");

  it("should have AutomateTanium.png and SnapPatch.png in public/assets/img/projects", () => {
    const taniumImg = path.join(assetsDir, "AutomateTanium.png");
    const snapPatchImg = path.join(assetsDir, "SnapPatch.png");

    assert.ok(fs.existsSync(taniumImg), "AutomateTanium.png should exist");
    assert.ok(fs.statSync(taniumImg).size > 0, "AutomateTanium.png should not be empty");

    assert.ok(fs.existsSync(snapPatchImg), "SnapPatch.png should exist");
    assert.ok(fs.statSync(snapPatchImg).size > 0, "SnapPatch.png should not be empty");
  });

  it("should export automatetanium and snappatch in public/assets/index.js", () => {
    const content = fs.readFileSync(assetsIndexFile, "utf8");
    assert.ok(
      content.includes('import automatetanium from "./img/projects/AutomateTanium.png";'),
      "Should import AutomateTanium.png"
    );
    assert.ok(
      content.includes('import snappatch from "./img/projects/SnapPatch.png";'),
      "Should import SnapPatch.png"
    );
    assert.ok(content.includes("automatetanium,"), "Should export automatetanium");
    assert.ok(content.includes("snappatch,"), "Should export snappatch");
  });

  it("should include AutomateTanium and SnapPatch in components/Projects.jsx", () => {
    const content = fs.readFileSync(projectsComponentFile, "utf8");

    // Check imports
    assert.ok(content.includes("automatetanium,"), "Should import automatetanium in Projects.jsx");
    assert.ok(content.includes("snappatch,"), "Should import snappatch in Projects.jsx");

    // Check project definitions
    assert.ok(content.includes('id: "automatetanium"'), "Should contain automatetanium project id");
    assert.ok(content.includes('title: "AutomateTanium"'), "Should contain AutomateTanium title");
    assert.ok(content.includes('id: "snappatch"'), "Should contain snappatch project id");
    assert.ok(content.includes('title: "SnapPatch"'), "Should contain SnapPatch title");
  });
});
