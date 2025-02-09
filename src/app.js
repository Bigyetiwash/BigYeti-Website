import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InstagramEmbed } from "react-social-media-embed";
import { FacebookEmbed } from "react-social-media-embed";

export default function HomePage() {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="p-6 flex justify-between items-center border-b border-gray-300">
        <h1 className="text-3xl font-bold">BigYeti Pressure Washing</h1>
        <div className="text-right">
          <p>Phone: 0420 763 267</p>
          <p>Email: bigyetiwash@outlook.com</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Driveway Cleaning</h3>
              <p>High-pressure washing to restore your driveway.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">House Washing</h3>
              <p>Soft washing techniques to clean your home's exterior.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Paver Cleaning</h3>
              <p>Deep cleaning and stain removal for paved areas.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
        <form className="bg-white text-black p-6 rounded-md">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
          <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</Button>
        </form>
      </section>

      {/* Gallery Page */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InstagramEmbed url="https://www.instagram.com/bigyetipressurewashing/" width={328} />
          <FacebookEmbed url="https://www.facebook.com/bigyetipressurewashing" width={328} />
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center border-t border-gray-300">
        <p>&copy; {new Date().getFullYear()} BigYeti Pressure Washing. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://www.facebook.com/bigyetipressurewashing" className="underline">Facebook</a>
          <a href="https://www.instagram.com/bigyetipressurewashing/" className="underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
