from turtle import *
import colorsys
import time

# Show the turtle
showturtle()

# Set up screen
speed(0)
bgcolor("black")

# Countdown delay (15 seconds)
penup()
goto(0, 0)
color("white")
style = ("Arial", 20, "bold")

for i in range(15, 0, -1):
    clear()
    write(f"Starting in {i} seconds...", align="center", font=style)
    time.sleep(1)

clear()  # Remove countdown text
home()   # Move turtle back to center
pendown()

# Initialize hue value
h = 0

# Outer loop for 16 repetitions
for i in range(16):
    # Inner loop for drawing 18 shapes
    for j in range(18):
        # Get the color using HSV to RGB conversion
        c = colorsys.hsv_to_rgb(h, 1, 1)
        color(c)

        # Increment hue for the next color
        h += 0.005

        # Draw shapes
        right(90)
        circle(150 - j * 6, 90)
        left(90)
        circle(150 - j * 6, 90)
        right(180)
        circle(40, 24)

# Complete the drawing
done()
