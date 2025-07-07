import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    minecraft_username: "",
    experience: "",
    motivation: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка формы
    console.log("Заявка отправлена:", formData);
  };

  return (
    <div className="min-h-screen bg-[#2D3748] text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#2D3748] to-[#1A202C] py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="/img/46adb4bc-9744-43a0-a038-602d7df82c73.jpg"
              alt="Minecraft Gaming Competition"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white font-['Montserrat']">
            MINECRAFT <span className="text-[#FF6B35]">SURVIVAL</span> GAMES
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto font-['Open_Sans']">
            Единственное в своем роде игровое шоу в мире Minecraft. 456 игроков,
            один победитель, детские игры адаптированные под механики любимой
            игры.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FF6B35]">456</div>
              <div className="text-sm text-gray-400">участников</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FF6B35]">456,000₽</div>
              <div className="text-sm text-gray-400">призовой фонд</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FF6B35]">1</div>
              <div className="text-sm text-gray-400">день игры</div>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-4 px-8 rounded-lg text-lg"
            onClick={() =>
              document
                .getElementById("registration")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Icon name="Play" className="mr-2" />
            Участвовать в шоу
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-[#1A202C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white font-['Montserrat']">
              О проекте
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Уникальное игровое шоу, где классические детские игры превращаются
              в захватывающие испытания в мире Minecraft
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF6B35] p-3 rounded-lg">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      456 участников
                    </h3>
                    <p className="text-gray-400">
                      Случайный отбор из всех заявок обеспечивает честность
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF6B35] p-3 rounded-lg">
                    <Icon name="Trophy" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Один победитель
                    </h3>
                    <p className="text-gray-400">
                      Только самый стойкий игрок получит весь призовой фонд
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF6B35] p-3 rounded-lg">
                    <Icon
                      name="GameController"
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Детские игры</h3>
                    <p className="text-gray-400">
                      Знакомые игры детства, адаптированные под Minecraft
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF6B35] p-3 rounded-lg">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Один день</h3>
                    <p className="text-gray-400">
                      Интенсивное игровое шоу продлится целый день
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <img
                src="https://cdn.poehali.dev/files/1b0000a9-7214-463f-8097-bc89a14ab84f.jpg"
                alt="Minecraft Trophy"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div id="registration" className="py-20 bg-[#2D3748]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white font-['Montserrat']">
              Подать заявку
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Заполните форму ниже, чтобы участвовать в отборе. Стоимость
              участия — 2000₽
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-[#1A202C] border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">
                  Форма регистрации
                </CardTitle>
                <CardDescription className="text-center text-gray-400">
                  Все поля обязательны для заполнения
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Полное имя
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      className="bg-[#2D3748] border-gray-600 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      className="bg-[#2D3748] border-gray-600 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="minecraft_username" className="text-white">
                      Никнейм в Minecraft
                    </Label>
                    <Input
                      id="minecraft_username"
                      name="minecraft_username"
                      value={formData.minecraft_username}
                      onChange={handleInputChange}
                      placeholder="Ваш игровой никнейм"
                      className="bg-[#2D3748] border-gray-600 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-white">
                      Опыт игры в Minecraft
                    </Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Например: 5 лет"
                      className="bg-[#2D3748] border-gray-600 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="text-white">
                      Почему вы хотите участвовать?
                    </Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Расскажите о своей мотивации..."
                      className="bg-[#2D3748] border-gray-600 text-white min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="bg-[#2D3748] p-4 rounded-lg border border-gray-600">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon name="CreditCard" className="text-[#FF6B35]" />
                      <span className="font-semibold text-white">
                        Условия участия
                      </span>
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Стоимость участия: 2000₽</li>
                      <li>• Случайный отбор из всех заявок</li>
                      <li>• Возврат средств при неотборе</li>
                      <li>• Игра проходит в один день</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-3 text-lg"
                  >
                    <Icon name="Send" className="mr-2" />
                    Подать заявку и оплатить (2000₽)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A202C] py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Minecraft Survival Games
          </h3>
          <p className="text-gray-400 mb-6">
            Уникальное игровое шоу в мире Minecraft
          </p>
          <div className="flex justify-center space-x-6">
            <Badge
              variant="outline"
              className="text-[#FF6B35] border-[#FF6B35]"
            >
              456 участников
            </Badge>
            <Badge
              variant="outline"
              className="text-[#FF6B35] border-[#FF6B35]"
            >
              456,000₽ призовой фонд
            </Badge>
            <Badge
              variant="outline"
              className="text-[#FF6B35] border-[#FF6B35]"
            >
              1 день игры
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
