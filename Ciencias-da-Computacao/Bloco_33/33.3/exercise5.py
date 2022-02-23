from abc import ABC, abstractmethod


class drawInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class drawImage(drawInterface):
    def __init__(self, interface):
        self.interface = interface

    def draw(self):
        print(f"Drawing {self.interface.get_image()}")


class ImageInterface(ABC):
    @abstractmethod
    def get_image(self):
        pass


class SvgImage(ImageInterface):
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


class PngImage(ImageInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def get_image(self):
        return f"PNG {self.png_path} with {self.format}"


drawer = drawImage(SvgImage('teste'))
drawer2 = drawImage(PngImage('teste'))

drawer.draw()
drawer2.draw()
