import argparse
import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
import imageio.v2 as imageio


def load_font(size: int) -> ImageFont.FreeTypeFont:
    for name in ["Caveat-Regular.ttf", "PatrickHand-Regular.ttf", "arial.ttf"]:
        try:
            return ImageFont.truetype(name, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_scribble_text(text: str, width: int, height: int) -> Image.Image:
    img = Image.new("RGBA", (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)

    font = load_font(96)
    x = 60
    y = 60

    colors = [(31, 27, 22, 255), (43, 36, 30, 160), (43, 36, 30, 120)]
    offsets = [(0, 0), (2, 2), (-2, -2)]

    for (dx, dy), color in zip(offsets, colors):
        draw.text((x + dx, y + dy), text, font=font, fill=color, stroke_width=2)

    return img


def underline_points(width: int, base_y: int) -> list[tuple[int, int]]:
    points = []
    for i in range(0, 80):
        t = i / 79
        x = 70 + int(t * (width - 140))
        wave = math.sin(t * math.pi * 1.6) * 10
        y = base_y + int(wave)
        points.append((x, y))
    return points


def generate_frames(text: str, width: int, height: int, frames: int) -> list[Image.Image]:
    text_img = draw_scribble_text(text, width, height)
    points = underline_points(width, base_y=168)

    out_frames = []
    for i in range(frames):
        progress = i / (frames - 1)

        bg = Image.new("RGBA", (width, height), (255, 255, 255, 255))
        frame = Image.new("RGBA", (width, height), (255, 255, 255, 0))

        mask = Image.new("L", (width, height), 0)
        mask_draw = ImageDraw.Draw(mask)

        limit = int(60 + progress * (width - 120))
        mask_draw.rectangle([0, 0, limit, height], fill=255)

        for _ in range(40):
            jitter_x = limit + random.randint(-10, 10)
            jitter_y = random.randint(40, height - 40)
            radius = random.randint(6, 12)
            mask_draw.ellipse(
                [jitter_x - radius, jitter_y - radius, jitter_x + radius, jitter_y + radius],
                fill=255,
            )

        frame = Image.composite(text_img, frame, mask)

        draw = ImageDraw.Draw(frame)
        underline_count = max(2, int(progress * len(points)))
        draw.line(
            points[:underline_count],
            fill=(200, 84, 44, 255),
            width=5,
            joint="curve",
        )

        out_frames.append(Image.alpha_composite(bg, frame))

    return out_frames


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--text", default="Scriptly - notes that flow")
    parser.add_argument("--width", type=int, default=900)
    parser.add_argument("--height", type=int, default=220)
    parser.add_argument("--frames", type=int, default=28)
    parser.add_argument("--out", default="assets/scriptly-scribble.gif")
    args = parser.parse_args()

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    frames = generate_frames(args.text, args.width, args.height, args.frames)

    imageio.mimsave(out_path, frames, duration=0.05)
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()
