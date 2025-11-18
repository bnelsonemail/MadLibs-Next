"use client";

import { useState } from "react";

export default function PremiumPollForm() {
  const [wantsPremium, setWantsPremium] = useState(null);
  const [pricePoint, setPricePoint] = useState("");
  const [customPrice, setCustomPrice] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (wantsPremium === null) {
      setError("Please select whether you'd use a premium MadLibs creator.");
      return;
    }

    if (wantsPremium && !pricePoint) {
      setError("Please select a price point.");
      return;
    }

    if (wantsPremium && pricePoint === "Other" && !customPrice.trim()) {
      setError("Please enter a custom price.");
      return;
    }

    if (comment.length > 300) {
      setError("Comment must be 300 characters or less.");
      return;
    }

    setIsSubmitting(true);

    try {
      const finalPricePoint = pricePoint === "Other" ? customPrice : pricePoint;

      const response = await fetch("/api/poll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wantsPremium,
          pricePoint: wantsPremium ? finalPricePoint : null,
          comment: comment.trim() || null,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Failed to submit poll. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
          Thank you for your feedback!
        </h2>
        <p className="text-green-700 dark:text-green-300">
          Your input helps us build better features for you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-3">
          Would you use a premium MadLibs creator? *
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="wantsPremium"
              value="yes"
              checked={wantsPremium === true}
              onChange={() => {
                setWantsPremium(true);
                setPricePoint("");
                setCustomPrice("");
              }}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="wantsPremium"
              value="no"
              checked={wantsPremium === false}
              onChange={() => {
                setWantsPremium(false);
                setPricePoint("");
                setCustomPrice("");
              }}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      {wantsPremium && (
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-3">
            What monthly price would you be willing to pay? *
          </label>
          <div className="space-y-2">
            {["$0.99", "$1.99", "$2.99", "$4.99", "Other"].map((price) => (
              <label key={price} className="flex items-center">
                <input
                  type="radio"
                  name="pricePoint"
                  value={price}
                  checked={pricePoint === price}
                  onChange={(e) => {
                    setPricePoint(e.target.value);
                    if (e.target.value !== "Other") {
                      setCustomPrice("");
                    }
                  }}
                  className="mr-2"
                />
                {price}
              </label>
            ))}
          </div>

          {pricePoint === "Other" && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter your price (e.g., $3.99)"
                value={customPrice}
                onChange={(e) => setCustomPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
              />
            </div>
          )}
        </div>
      )}

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-3">
          Additional comments (optional)
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share any thoughts or feature requests..."
          maxLength={300}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
        />
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {comment.length}/300 characters
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Poll"}
      </button>
    </form>
  );
}

