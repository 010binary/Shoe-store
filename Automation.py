import json
import random
import re

# List of shoe names
shoe_names = [
    "adidas AdADIFOM CLIMACOOL red.avif",
    "nike air jordan iii retro.webp",
    "NIke-air-jordan-mid.webp",
    "adidas ADIFOM CLIMACOOL.avif",
    "NIke air jordan mid.webp",
    "NIke-Free Metcon 5.webp",
    "adidas CRAZY 8(2).avif",
    "Nike Air Jordan XIV.webp",
    "Nike-free-metcon-9.webp",
    "adidas CRAZY 8.avif",
    "Nike Air Zoom Crossover 2.webp",
    "Nike-free-metcon-9-easyon.webp",
    "adidas NMD_V3.avif",
    "Nike AlphaFly 3.webp",
    "Nike-lebron-nxxt-gen.webp",
    "adidas STREETBALL III.avif",
    "Nike Jordan AJ XXXVIII.webp",
    "Nike-Pegasus-40.avif",
    "adidas TERREX FREE HIKER 2.0.avif",
    "NIke Jordan Zion 3 .webp",
    "Nike-Zoom-Fly-5-Premium.webp",
    "adidas TERREX FREE HIKER 2.avif",
    "Nike Kids' Giannis Immortality 2 .webp",
    "TWO WXY V4 2.webp",
    "new balance 530.webp",
    "NIKE LEBRON 21.webp",
    "TWO WXY V4.webp",
    "new balance 9060.webp",
    "Nike LeBron XXI Tahitian.webp",
    "Nike Air Jordan 1.webp",
    "Nike Pegasus 40.webp",
    "Air jordan 4 craft olive.webp",
    "Jordan winterized 6 rings.webp",
    "Jordan jumpman pro.webp",
    "Jordan 6 rings.webp",
    "Air Jordan XXXVIII Low Fundamental.webp",
    "Kaptir 3.0 Wide.avif",
]


# Function to generate random prices
def generate_prices():
    return random.randint(100, 450)


# Function to generate random reviews
def generate_reviews():
    return random.randint(60, 900)


# Generating JSON data for shoes
shoes_data = []
for shoe_name in shoe_names:
    # Replacing non-alphanumeric characters with spaces and converting to title case
    formatted_name = re.sub(r"\.\w+$", "", shoe_name).title()
    formatted_name = formatted_name.replace("-", " ")

    # Generating random prices
    discounted_price = generate_prices()
    original_price = discounted_price + random.randint(
        50, 200
    )  # Higher than the previous price

    # Calculating discount percentage
    discount_percentage = round(
        ((original_price - discounted_price) / original_price) * 100
    )

    # Randomly choosing liked stars between 3 and 5
    liked_stars = random.randint(3, 5)

    # Generating random reviews
    reviews = generate_reviews()

    # to generate the PATH to the image
    path = f"./image/Product_images/{shoe_name}"

    # Creating shoe data dictionary
    shoe_data = {
        "name": formatted_name,
        "Discountprice": discounted_price,
        "originalprice": original_price,
        "discount_percentage": discount_percentage,
        "liked_stars": liked_stars,
        "reviews": reviews,
        "PATH": path,
    }

    shoes_data.append(shoe_data)


# Writing data to JSON file
with open("shoes_data.json", "w") as json_file:
    json.dump(shoes_data, json_file, indent=4)
